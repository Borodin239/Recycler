package ru.geniuses.recycler.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.geniuses.recycler.model.TypeWrapper;

public interface TypeRepository extends JpaRepository<TypeWrapper, Long> {
}
