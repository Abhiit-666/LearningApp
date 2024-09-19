import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/user")
public class UserController {

    @Autowired
    private UserService userservice;

    @PostMapping("/save")
    public ResponseEntity<String> createUser(@RequestBody User user) throws Exception {
        userservice.save(user);
        return ResponseEntity.ok("User Created");
    }

}
