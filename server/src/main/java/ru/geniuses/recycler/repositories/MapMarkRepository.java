package ru.geniuses.recycler.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.geniuses.recycler.model.MapMark;

public interface MapMarkRepository extends JpaRepository<MapMark, Long> {
}
