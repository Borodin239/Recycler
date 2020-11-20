package ru.geniuses.recycler.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.geniuses.recycler.exceptions.PostNotFoundException;
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

    @GetMapping(value = {"/", ""})
    public Iterable<Post> getPosts() {
        return postService.findAll();
    }

    @PostMapping(value = {"/", ""})
    public Post newPost(@RequestBody Post post) {
        return postService.save(post);
    }

    @GetMapping(value = "/{id}")
    public Post getPost(@PathVariable Long id) throws PostNotFoundException {
        return postService.findById(id).orElseThrow(() -> new PostNotFoundException("Post with id " + id + " not found"));
    }

}
