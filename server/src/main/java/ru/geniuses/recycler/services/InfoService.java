package ru.geniuses.recycler.services;

import org.springframework.stereotype.Service;
import ru.geniuses.recycler.model.Info;
import ru.geniuses.recycler.repositories.InfoRepository;

import javax.persistence.criteria.CriteriaBuilder;

@Service
public class InfoService {

    private final InfoRepository infoRepository;

    public InfoService(InfoRepository infoRepository) {
        this.infoRepository = infoRepository;
    }

    public Iterable<Info> findAll() {
        return infoRepository.findAll();
    }

    public Info save(Info info) {
        return infoRepository.save(info);
    }
}
