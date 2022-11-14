package com.eco.eco;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;

@SpringBootApplication
@RestController
public class EcoApplication {

	private final static String SOLAR_API_PK = "19335ed1a0f3b768d665543d9f76d50c";

	public static void main(String[] args) {
		SpringApplication.run(EcoApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}


	@GetMapping("/solar")
	public Map<String, Object> getSolarIrradiation() {
//		URL url = new URL("https://api.openweathermap.org/data/2.5/solar_radiation?lat=53.2734&lon=-7.77832031&appid=" + SOLAR_API_PK);
//		try (InputStream input = url.openStream()) {
//			InputStreamReader isr = new InputStreamReader(input);
//			BufferedReader reader = new BufferedReader(isr);
//			StringBuilder json = new StringBuilder();
//			int c;
//			while ((c = reader.read()) != -1) {
//				json.append((char) c);
//			}
//			return json.toString();
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
		ObjectMapper mapper = new ObjectMapper();
		String json = "{\"coord\": {\"lon\": -114.6244, \"lat\": 32.7243},\"list\": [{\"radiation\": {\"ghi\": 206.68,\"dni\": 2.27,\"dhi\": 204.83,\"ghi_cs\": 826.71,\"dni_cs\": 885.47,\"dhi_cs\": 114.93},\"dt\": 1618232400}] }";
		try {
			return mapper.readValue(json, Map.class);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Map.of();
	}
}
