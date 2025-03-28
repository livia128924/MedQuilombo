import { Tooltip } from "@mui/material";
import { ButtonS } from "./styles";
import * as S from "./styles";

interface Props {
  ButtonProps?: React.ComponentProps<typeof ButtonS>;
  Children?: string;
  Icon?: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  PaddingButton?: string;
  variant?: "text" | "contained" | "outlined"; // Aqui você define os valores possíveis para `variant`
  SizeButton?: string;
  Font?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  tooltipText?: string;
  weight?: any;
}

function Button({
  ButtonProps,
  Children,
  Icon,
  PaddingButton,
  onClick,
  variant = "text",
  SizeButton,
  Font,
  disabled,
  tooltipText,
  type,
  weight,
}: Props) {
  return (
    <Tooltip
      title={tooltipText}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -12],
              },
            },
          ],
        },
      }}
    >
      <S.ButtonS
        {...ButtonProps}
        variant={ButtonProps?.variant || variant} // Garantir que o valor de `variant` seja passado corretamente
        PaddingButton={PaddingButton}
        onClick={onClick}
        size={SizeButton}
        family={Font}
        weight={weight}
        disabled={disabled}
        type={type}
      >
        {Icon && <Icon size={24} />}
        {Children}
      </S.ButtonS>
    </Tooltip>
  );
}

export default Button;
