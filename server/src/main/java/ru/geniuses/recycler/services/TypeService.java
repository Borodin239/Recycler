package ru.geniuses.recycler.services;

import org.springframework.stereotype.Service;
import ru.geniuses.recycler.model.TypeWrapper;
import ru.geniuses.recycler.repositories.TypeRepository;

@Service
public class TypeService {
    private final TypeRepository typeRepository;

    public TypeService(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    public TypeWrapper save(TypeWrapper type) {
        return typeRepository.save(type);
    }
}
