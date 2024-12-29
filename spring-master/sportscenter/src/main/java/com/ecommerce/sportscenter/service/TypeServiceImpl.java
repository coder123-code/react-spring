package com.ecommerce.sportscenter.service;

import com.ecommerce.sportscenter.entity.Type;
import com.ecommerce.sportscenter.model.TypeResponse;
import com.ecommerce.sportscenter.repository.TypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TypeServiceImpl implements TypeService {

    private static final Logger log = LoggerFactory.getLogger(TypeServiceImpl.class);
    private final TypeRepository typeRepository;

    public TypeServiceImpl(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    @Override
    public List<TypeResponse> getAllTypes() {
        log.info("Fetching All Types!!!");
        //Fetch Types from DB
        List<Type> typeList = typeRepository.findAll();
        //now use stream operator to map with Response
        List<TypeResponse> typeResponses = typeList.stream()
                .map(this::convertToTypeResponse)
                .collect(Collectors.toList());
        return typeResponses;
    }

    private TypeResponse convertToTypeResponse(Type type) {
        TypeResponse response = new TypeResponse();
        response.setId(type.getId());
        response.setName(type.getName());
        return response;
    }
}