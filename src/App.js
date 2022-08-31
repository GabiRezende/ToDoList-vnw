import React, { Component } from "react";
import * as S from "./styled";

export default class App extends Component {
    state = {
        tarefa: "",
        lista: []
    };

    handleChange = (e) => {
        this.setState({ tarefa: e.target.value });
    };

    add = () => {
        if (this.state.tarefa !== "") {
            this.setState({
                lista: this.state.lista.concat({
                    tarefa: this.state.tarefa,
                    id: Date.now()
                }),
                tarefa: ""
            });
        }
    };

    enter = (e) => {
        if (this.state.tarefa.length > 0 && e.key === "Enter") {
            this.setState({
                lista: this.state.lista.concat({
                    tarefa: this.state.tarefa,
                    id: Date.now()
                }),
                tarefa: ""
            });
        };
    };

    remove = (id) => {
        this.setState({
            lista: this.state.lista.filter((item) => item.id !== id)
        });
    };

    render() {
        return (
            <S.Body>
                <S.Global />
                <S.Title>Lista de Tarefas</S.Title>
                <S.Main>
                    <S.Label>A fazer:</S.Label>
                    <S.Input onChange={this.handleChange} onKeyPress={this.enter} value={this.state.tarefa} title="Escreva sua tarefa" />
                    <S.Button onClick={this.add} title="Adicione a tarefa" >+</S.Button>
                </S.Main>
                {this.state.lista.map((item) => (
                    <S.Result key={item.id}>
                        <h3>{item.tarefa}</h3>
                        <S.Check onClick={() => this.remove(item.id)} title="Concluído" >-</S.Check>
                    </S.Result>
                ))}
            </S.Body>
        );
    }
}