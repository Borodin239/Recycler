package ru.geniuses.recycler.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.geniuses.recycler.model.Post;
import ru.geniuses.recycler.repositories.PostsRepository;

import java.util.Optional;

@Service
public class PostService {
    private final PostsRepository postsRepository;

    @Autowired
    public PostService(PostsRepository postRepository) {
        this.postsRepository = postRepository;
    }

    public Iterable<Post> findAll() {
        return postsRepository.findAll();
    }

    public Post save(Post post) {
        return postsRepository.save(post);
    }

    public Optional<Post> findById(Long id) {
        return postsRepository.findById(id);
    }
}
