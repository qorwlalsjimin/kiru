package mirim.itshow.kiru.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import mirim.itshow.kiru.controller.json.RentJson;
import mirim.itshow.kiru.dao.RentRepository;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.entity.Rent;
import mirim.itshow.kiru.entity.RentItem;
import mirim.itshow.kiru.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class RentController {
    @Autowired
    RentService rentService;

    @PostMapping("/rent/new") //대여 신청
    public ResponseEntity<Object> addRent(@RequestBody RentJson rentJson) throws URISyntaxException {
        Rent rent = rentService.addRent(rentJson);
        return ResponseEntity.ok().body(rent);
    }

}