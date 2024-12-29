package com.ecommerce.sportscenter.model;

/*@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BrandResponse {
    private Integer id;
    private String name;
}

import lombok.*;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BrandResponse {
    private Long id;
    private String name;
}


 */



public class BrandResponse {
    private Integer id;
    private String name;

    // Default constructor
    public BrandResponse() {
    }

    // All args constructor
    public BrandResponse(Integer id, String name) {
        this.id = id;
        this.name = name;
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
}