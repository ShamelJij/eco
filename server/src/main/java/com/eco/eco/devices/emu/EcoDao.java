package com.eco.eco.devices.emu;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface EcoDao<T> {
    Optional<T> get(String id);

    List<T> getAll();

    Device save(T t);

    Device update(T t, Map<String, String> params);

    void delete(T t);
}
