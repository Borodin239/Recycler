package ru.geniuses.recycler.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import ru.geniuses.recycler.model.MapMark;
import ru.geniuses.recycler.model.Post;
import ru.geniuses.recycler.model.Type;
import ru.geniuses.recycler.model.TypeWrapper;
import ru.geniuses.recycler.repositories.MapMarkRepository;
import ru.geniuses.recycler.repositories.PostsRepository;
import ru.geniuses.recycler.repositories.TypeRepository;

import java.util.List;

@Component
public class PostsBootstrap implements CommandLineRunner {

    private final PostsRepository postsRepository;
    private final MapMarkRepository mapMarkRepository;
    private final TypeRepository typeRepository;

    @Autowired
    public PostsBootstrap(PostsRepository postsRepository, MapMarkRepository mapMarkRepository, TypeRepository typeRepository) {
        this.postsRepository = postsRepository;
        this.mapMarkRepository = mapMarkRepository;
        this.typeRepository = typeRepository;
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

        TypeWrapper glass = new TypeWrapper();
        glass.setType(Type.Glass);
        TypeWrapper cardboard = new TypeWrapper();
        cardboard.setType(Type.Cardboard);
        TypeWrapper plastic = new TypeWrapper();
        plastic.setType(Type.Plastic);

        typeRepository.save(glass);
        typeRepository.save(cardboard);
        typeRepository.save(plastic);

        MapMark mapMark1 = new MapMark();
        mapMark1.setX(59.955413);
        mapMark1.setY(30.337844);
        mapMark1.setMaterialTypes(List.of(plastic));
        mapMarkRepository.save(mapMark1);

        MapMark mapMark2 = new MapMark();
        mapMark2.setX(59.981111);
        mapMark2.setY(30.347844);
        mapMark2.setMaterialTypes(List.of(cardboard));
        mapMarkRepository.save(mapMark2);

        MapMark mapMark3 = new MapMark();
        mapMark3.setX(59.956413);
        mapMark3.setY(30.137844);
        mapMark3.setMaterialTypes(List.of(glass));
        mapMarkRepository.save(mapMark3);

        MapMark mapMark4 = new MapMark();
        mapMark4.setX(59.926413);
        mapMark4.setY(30.135844);
        mapMark4.setMaterialTypes(List.of(glass));
        mapMarkRepository.save(mapMark4);

    }
}
