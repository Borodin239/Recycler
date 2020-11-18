package ru.geniuses.recycler.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.geniuses.recycler.model.Post;
import ru.geniuses.recycler.services.PostService;

@RestController
@RequestMapping("posts")
public class PostAPI {

    private final PostService postService;

    @Autowired
    public PostAPI(PostService postService) {
        this.postService = postService;
    }

    @GetMapping(value = {"/", ""}, produces = "application/json")
    public Iterable<Post> getPosts() {
        return postService.findAll();
    }

}
