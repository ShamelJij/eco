package com.eco.eco.devices.emu;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.stream.StreamSupport;

@RestController
public class DeviceController {

    @Autowired
    private DeviceRepository deviceRepository;

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/get/{id}")
    public String getDevice(@PathVariable String id) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(
                    StreamSupport.stream(deviceRepository.findAll().spliterator(), false)
                            .filter(d -> d.getDeviceId().equals(id))
                            .findAny()
                            .orElse(null));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/devices")
    public String getDevices() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(deviceRepository.findAll());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }


    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/addDevice")
    public Device addDevice(@RequestBody Device newDevice) {
        return deviceRepository.save(newDevice);
    }
}
