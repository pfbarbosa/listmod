package com.pfbarbosa.listmod.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pfbarbosa.listmod.model.Modulo;
import com.pfbarbosa.listmod.repository.ModuloRepository;

@RestController
@RequestMapping("/modulos")
public class ModuloResource {

	@Autowired
	private ModuloRepository moduloRepository;
	
	@GetMapping
	public List<Modulo> listar() {
		return moduloRepository.findAll();
	}
	
}
