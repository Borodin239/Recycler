package ru.geniuses.recycler.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class MapMark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double x;
    private Double y;

    @ManyToMany
    @JoinTable(name = "mapMark_materialTyoe",
            joinColumns = @JoinColumn(name = "type_id"),
            inverseJoinColumns = @JoinColumn(name = "mark_id"))
    @Enumerated(EnumType.STRING)
    private List<TypeWrapper> materialTypes;
}
