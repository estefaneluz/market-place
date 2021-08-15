import {
  Typography,
  TextField,
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import ActionButtons from "../../components/ActionButtons";
import useStyles from "../../styles/form";
import "./styles.css";

export default function EditProduct() {
  const [product, setProduct] = useState({});
  const { setLoading, token, setErrorMessage } = useContext(AuthContext);
  const { id } = useParams("/produtos/:id/editar");
  const history = useHistory();
  const styles = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const request = await fetch(
        `https://desafio-m03.herokuapp.com/produtos/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);

      const response = await request.json();
      setProduct(response);
    };

    getProduct();
  }, []);

  const editProduct = async (data) => {
    if (!data.nome) data.nome = product.nome;
    if (!data.descricao) data.descricao = product.descricao;

    if (!data.estoque) {
      data.estoque = product.estoque;
    } else {
      if (data.estoque.includes(".") || data.estoque.includes(",")) {
        setError("estoque", { type: "validate" }, { shouldFocus: true });
        setErrorMessage("O estoque precisa ser um número inteiro.");
        return;
      }
    }

    if (!data.preco) {
      data.preco = product.preco;
    } else {
      data.preco = data.preco * 100;
    }

    setErrorMessage("");
    setLoading(true);
    const request = await fetch(
      `https://desafio-m03.herokuapp.com/produtos/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setLoading(false);

    if (request.ok) return history.push("/produtos");

    const response = await request.json();
    setErrorMessage(response);
  };

  return (
    <>
      <Typography variant="h4" component="h2">
        Editar produto
      </Typography>
      <div className="row">
        {!!product.nome && (
          <form className={styles.column}>
            <TextField
              label="Nome do produto"
              defaultValue={product.nome}
              {...register("nome")}
              error={!!errors.nome}
            />
            <div className="row">
              <FormControl>
                <InputLabel error={!!errors.preco} htmlFor="preco">
                  Preço
                </InputLabel>

                <Input
                  type="number"
                  id="preco"
                  startAdornment={
                    <InputAdornment position="start">R$</InputAdornment>
                  }
                  defaultValue={product.preco / 100}
                  {...register("preco", { valueAsNumber: true })}
                  error={!!errors.preco}
                />
              </FormControl>
              <FormControl>
                <InputLabel error={!!errors.estoque} htmlFor="estoque">
                  Estoque
                </InputLabel>

                <Input
                  type="number"
                  id="estoque"
                  startAdornment={
                    <InputAdornment position="start">Un</InputAdornment>
                  }
                  defaultValue={product.estoque}
                  {...register("estoque", { valueAsNumber: true })}
                  error={!!errors.estoque}
                />
              </FormControl>
            </div>
            <TextField
              label="Descrição do produto"
              defaultValue={product.descricao}
              {...register("descricao")}
              error={!!errors.descricao}
            />
            <TextField
              label="Imagem"
              defaultValue={product.imagem}
              {...register("imagem")}
              error={!!errors.imagem}
            />
            <ActionButtons onSubmit={handleSubmit(editProduct)} />
          </form>
        )}
        <img className="img-product" alt={product.name} src={product.imagem} />
      </div>
    </>
  );
}