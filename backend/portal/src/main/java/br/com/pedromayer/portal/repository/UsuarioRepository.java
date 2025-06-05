package br.com.pedromayer.portal.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.pedromayer.portal.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer>{

}
