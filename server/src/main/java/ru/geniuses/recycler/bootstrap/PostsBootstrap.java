package ru.geniuses.recycler.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ru.geniuses.recycler.model.Post;
import ru.geniuses.recycler.repositories.PostsRepository;

@Component
public class PostsBootstrap implements CommandLineRunner {

    private final PostsRepository postsRepository;

    @Autowired
    public PostsBootstrap(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }

    @Override
    public void run(String... args) {
        Post post1 = new Post();
        post1.setContent("Content of Post 1");
        post1.setTitle("Title of Post 1");
        postsRepository.save(post1);

        Post post2 = new Post();
        post2.setContent("Content of Post 2");
        post2.setTitle("Title of Post 2");
        postsRepository.save(post2);

        Post post3 = new Post();
        post3.setContent("Content of Post 3");
        post3.setTitle("Title of Post 3");
        postsRepository.save(post3);

        Post post4 = new Post();
        post4.setContent("Content of Post 4");
        post4.setTitle("Title of Post 4");
        postsRepository.save(post4);
    }
}
