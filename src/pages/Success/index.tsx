import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import pedidoConfirmado from '../../assets/pedidoConfirmado.svg';
import { BorderContainer, BoxInfosContainer, DolarBox, ItemInfo, MapPinBox, RowContainer, SuccessContainer, TimerBox } from "./styles";

export function Success(){
    return(
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <h2>Agora é só aguardar que logo o café chegará até você</h2>
            <RowContainer>
                <BorderContainer>
                    <BoxInfosContainer>
                        <ItemInfo>
                            <MapPinBox>
                                <MapPin size={16}/>
                            </MapPinBox>
                            <p>Entrega em <b>Rua João Daniel Martinelli, 102</b><br /> Farrapos - Porto Alegre, RS</p>
                        </ItemInfo>
                        <ItemInfo>
                            <TimerBox>
                                <Timer size={16} />
                            </TimerBox>
                            <p>Previsão de entrega <br />
                            <b>20 min - 30 min</b></p>
                        </ItemInfo>
                        <ItemInfo>
                            <DolarBox>
                                <CurrencyDollar size={16} />
                            </DolarBox>
                            <p>Pagamento na entrega <br />
                            <b>Cartão de Crédito</b></p>
                        </ItemInfo>
                    </BoxInfosContainer>
                </BorderContainer>
                <img src={pedidoConfirmado} alt="Imagem de um homem sentado em uma moto, com um pacote de entrega na garupa." />
            </RowContainer>
        </SuccessContainer>
    );
}