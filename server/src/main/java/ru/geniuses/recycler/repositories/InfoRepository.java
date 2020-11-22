package ru.geniuses.recycler.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.geniuses.recycler.model.Info;

public interface InfoRepository extends JpaRepository<Info, Long> {
}
