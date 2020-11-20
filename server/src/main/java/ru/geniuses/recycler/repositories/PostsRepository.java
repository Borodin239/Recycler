package ru.geniuses.recycler.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.geniuses.recycler.model.Post;

public interface PostsRepository extends JpaRepository<Post, Long> {
}
