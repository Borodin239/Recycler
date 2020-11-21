package ru.geniuses.recycler.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.geniuses.recycler.model.MapMark;
import ru.geniuses.recycler.services.MapMarkService;

@RestController
@RequestMapping("mapmarks")
public class MapMarksRESTController {

    private final MapMarkService mapMarkService;

    public MapMarksRESTController(MapMarkService mapMarkService) {
        this.mapMarkService = mapMarkService;
    }

    @GetMapping(value = {"/", ""})
    public Iterable<MapMark> getMapMarks() {
        return mapMarkService.findAll();
    }

    @PostMapping(value = {"/", ""})
    public MapMark addMapMark(MapMark mapMark) {
        return mapMarkService.save(mapMark);
    }
}
