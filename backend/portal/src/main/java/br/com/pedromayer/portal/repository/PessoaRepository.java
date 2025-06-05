package br.com.pedromayer.portal.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.pedromayer.portal.model.Pessoa;

public interface PessoaRepository extends CrudRepository<Pessoa, Integer>{

}
