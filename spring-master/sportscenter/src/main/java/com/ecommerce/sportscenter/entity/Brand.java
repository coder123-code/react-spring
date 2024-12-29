
package com.ecommerce.sportscenter.entity;

/*import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name="Brand")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Id")
    private Integer id;
    @Column(name="Name")
    private String name;
    /*@OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private List<Product> prodcts;
    */






/*import lombok.*;
import lombok.Getter;

@Getter
public class Brand {
    private Long id;
    private String name;
    // other fields and methods
}
*/



import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "Brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer id;

    @Column(name = "Name")
    private String name;

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private List<Product> prodcts;

    // Default constructor
    public Brand() {
    }

    // All args constructor
    public Brand(Integer id, String name, List<Product> prodcts) {
        this.id = id;
        this.name = name;
        this.prodcts = prodcts;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Product> getProdcts() {
        return prodcts;
    }

    public void setProdcts(List<Product> prodcts) {
        this.prodcts = prodcts;
    }
}
