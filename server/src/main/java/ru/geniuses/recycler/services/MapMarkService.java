package ru.geniuses.recycler.services;

import org.springframework.stereotype.Service;
import ru.geniuses.recycler.model.MapMark;
import ru.geniuses.recycler.repositories.MapMarkRepository;

@Service
public class MapMarkService {

    private final MapMarkRepository mapMarkRepository;

    public MapMarkService(MapMarkRepository mapMarkRepository) {
        this.mapMarkRepository = mapMarkRepository;
    }

    public MapMark save(MapMark mapMark) {
        return mapMarkRepository.save(mapMark);
    }

    public Iterable<MapMark> findAll() {
        return mapMarkRepository.findAll();
    }
}
