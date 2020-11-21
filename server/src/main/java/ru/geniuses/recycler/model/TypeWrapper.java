package ru.geniuses.recycler.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class TypeWrapper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Type type;
}
