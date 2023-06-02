package mirim.itshow.kiru.controller;


import mirim.itshow.kiru.controller.json.RentJson;
import mirim.itshow.kiru.entity_domain.Rent;
import mirim.itshow.kiru.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URISyntaxException;

@RestController
@RequestMapping("/api/rent")
public class RentController {
    @Autowired
    RentService rentService;

    @PostMapping("/new") //대여 신청
    public ResponseEntity<Object> addRent(@RequestBody RentJson rentJson) throws URISyntaxException {
        Rent rent = rentService.addRent(rentJson, SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok().body(rent);
    }

}