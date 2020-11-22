package ru.geniuses.recycler.controllers;

import org.springframework.web.bind.annotation.*;
import ru.geniuses.recycler.model.Info;
import ru.geniuses.recycler.services.InfoService;

import javax.persistence.criteria.CriteriaBuilder;

@RestController
@RequestMapping("info")
public class InfoRESTController {

    private final InfoService infoService;

    public InfoRESTController(InfoService infoService) {
        this.infoService = infoService;
    }

    @GetMapping({"", "/"})
    public Iterable<Info> getInfo() {
        return infoService.findAll();
    }

    @PostMapping({"", "/"})
    public Info saveInfo(@RequestBody Info info) {
        return infoService.save(info);
    }
}
