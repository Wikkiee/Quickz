package com.wikkie.quickz.Auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import com.wikkie.quickz.Config.JwtService;
import com.wikkie.quickz.Dao.UserDao;
import com.wikkie.quickz.Model.Role;
import com.wikkie.quickz.Model.Users;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserDao repository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
                var user = Users.builder()
                                .userName(request.getUsername())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(Role.USER)
                                .build();
                repository.save(user);
                var jwtToken = jwtService.generateToken(user);
                return AuthenticationResponse.builder()
                                .token(jwtToken)
                                .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                try {

                        var user = repository.findByEmail(request.getEmail());

                        if (user == null) {
                                System.out.println("User not found");
                                throw new InvalidUserNameAndPasswordException("User not found");
                        }

                        authenticationManager
                                        .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                                        request.getPassword()));
                        var jwtToken = jwtService.generateToken(user);
                        return AuthenticationResponse.builder()
                                        .token(jwtToken)
                                        .build();
                } catch (BadCredentialsException ex) {
                        throw new InvalidUserNameAndPasswordException("Please check the password");
                }

        }

        public class InvalidUserNameAndPasswordException extends RuntimeException {
                public InvalidUserNameAndPasswordException(String message) {
                        super(message);
                }
        }

        @ControllerAdvice
        public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

                @ExceptionHandler(InvalidUserNameAndPasswordException.class)
                public ResponseEntity<Object> handleInvalidPasswordException(InvalidUserNameAndPasswordException ex) {

                        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
                }
        }

}
