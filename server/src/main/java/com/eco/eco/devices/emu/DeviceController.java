package com.eco.eco.devices.emu;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.StreamSupport;

@RestController
public class DeviceController {

    private static final Logger logger = LoggerFactory.getLogger(DeviceController.class);

    @Autowired
    private DeviceRepository deviceRepository;

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

    @GetMapping("/devices")
    public String getDevices() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.writeValueAsString(
                    StreamSupport.stream(deviceRepository.findAll().spliterator(), false)
                            .filter(Predicate.not(Device::isDeleted)).toList());
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

    @PostMapping("/addDevice")
    public Device addDevice(@RequestBody Device newDevice) {
        System.out.println("Add device" + newDevice);
        Device addedDevice = deviceRepository.save(newDevice);
        System.out.println("Added device" + addedDevice);
        return addedDevice;
    }

    @PostMapping("/updateDevice")
    public @ResponseBody Device updateDevice(@RequestBody Device deviceToUpdate) {

        Device device =  StreamSupport.stream(deviceRepository.findAll().spliterator(), false)
                .filter(d -> d.getDeviceId().equals(deviceToUpdate.getDeviceId()))
                .findAny()
                .orElse(null);

        if (device != null) {
            device.setName(deviceToUpdate.getName());
            device.setAvgConsumption(deviceToUpdate.getAvgConsumption());
            device.setAvgDuration(deviceToUpdate.getAvgDuration());
            device.setDeleted(deviceToUpdate.isDeleted());
            return deviceRepository.save(device);
        }

        return null;
    }

    @PostMapping("/deleteDevice")
    public Device deleteDevice(@RequestBody Device deviceToDelete) {
        logger.info("deleting device:" + deviceToDelete.getDeviceId());
        Device device =  StreamSupport.stream(deviceRepository.findAll().spliterator(), false)
                .filter(d -> d.getDeviceId().equals(deviceToDelete.getDeviceId()))
                .findAny()
                .orElse(null);

        if (device != null) {
            logger.info("Device " + deviceToDelete.getDeviceId() + " is present");
            device.setDeleted(true);
            deviceRepository.save(device);
            return device;
        }
        return null;
    }
}
