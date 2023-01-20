// React, Redux
import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import { FormControl, MenuItem, makeStyles } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const style = makeStyles(() => ({
  formControl: {
    borderRadius: "10px",
    width: "100%"
  },
  validate: {
    color: "#f44336",
    fontSize: "0.9em",
    fontWeight: "normal"
  },
  icon: {
    display: "none"
  },
  iconSize: {
    fontSize: "1.25rem"
  }
}));

const theme = createTheme({
  palette: {
    text: {
      disabled: "#666666"
    }
  }
});

const SelectList = props => {
  const { t } = useTranslation();
  const classes = style();

  const {
    type,
    value,
    onChange,
    required,
    disabled,
    lists,
    label,
    name,
    validation,
    dataCy,
    dataCyItem,
    showAll,
    showValueAndText,
    showName,
    showText,
    id,
    clear,
    showDefault,
    defaultText
  } = props;

  const MenuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    getContentAnchorEl: null
  };

  return (
    <FormControl className={classes.formControl}>
      <ThemeProvider theme={theme}>
        <TextField
          select
          id={id}
          name={name}
          type={type}
          required={required}
          dataCy={dataCy}
          disabled={disabled}
          label={t(label)}
          error={validation}
          value={value}
          margin="dense"
          onChange={e => onChange(e.target.value)}
          InputProps={{
            endAdornment: value && !disabled && clear && (
              <IconButton onClick={() => onChange("")} size="small">
                <ClearIcon
                  classes={{
                    root: classes?.iconSize
                  }}
                />
              </IconButton>
            )
          }}
          SelectProps={{
            classes: {
              icon: value && !disabled && classes.icon
            },
            MenuProps
          }}
        >
          {showAll && (
            <MenuItem value="-1">
              <em>{t("Svi/e")}</em>
            </MenuItem>
          )}
          {showDefault && (
            <MenuItem value="-2">
              <em>{t(defaultText)}</em>
            </MenuItem>
          )}
          {lists?.map(item => (
            <MenuItem key={item.id} value={item.id} dataCy={item.dataCyItem}>
              {!showName && item.value !== undefined
                ? showValueAndText
                  ? `${item.value} - ${item.text}`
                  : showText
                  ? item.text
                  : item.value
                : item.name}
            </MenuItem>
          ))}
        </TextField>
      </ThemeProvider>
      {validation && (
        <FormHelperText className={validation ? classes.validate : ""}>
          {validation}
        </FormHelperText>
      )}
    </FormControl>
  );
};

SelectList.defaultProps = {
  type: "text",
  value: "",
  error: false,
  helperText: "",
  defaultText: "",
  required: false,
  disabled: false,
  name: "",
  showAll: false,
  showDefault: false,
  showValueAndText: false,
  showText: false,
  id: "",
  clear: true
};

export default SelectList;
