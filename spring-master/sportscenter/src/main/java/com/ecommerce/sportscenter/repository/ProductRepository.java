/*package com.ecommerce.sportscenter.repository;

import com.ecommerce.sportscenter.entity.Brand;
import com.ecommerce.sportscenter.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Page<Product> findByNameContainingIgnoreCase(String keyword, Pageable pageable);
    Page<Product> findByBrandId(Integer brandId, Pageable pageable);
    Page<Product> findByTypeId(Integer typeId, Pageable pageable);
    Page<Product> findByBrandIdAndTypeId(Integer brandId, Integer typeId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndBrandId(String keyword, Integer brandId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndTypeId(String keyword, Integer typeId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndBrandIdAndTypeId(String keyword, Integer brandId, Integer typeId, Pageable pageable);
}*/


package com.ecommerce.sportscenter.repository;

import com.ecommerce.sportscenter.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    Page<Product> findByNameContainingIgnoreCase(String keyword, Pageable pageable);
    Page<Product> findByBrandId(Integer brandId, Pageable pageable);
    Page<Product> findByTypeId(Integer typeId, Pageable pageable);
    Page<Product> findByBrandIdAndTypeId(Integer brandId, Integer typeId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndBrandId(String keyword, Integer brandId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndTypeId(String keyword, Integer typeId, Pageable pageable);
    Page<Product> findByNameContainingIgnoreCaseAndBrandIdAndTypeId(String keyword, Integer brandId, Integer typeId, Pageable pageable);
}