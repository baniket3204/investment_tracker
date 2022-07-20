<Button
  href={props.url}
  size="large"
  variant="contained"
  color={color}
  style={{ borderRadius: "30px" }}
  endIcon={
    icon ? (
      <ArrowForwardIosRoundedIcon fontSize="small" />
    ) : (
      <ArrowForwardRounded />
    )
  }
  onMouseOver={() => {
    setIcon(false);
    setColor(props.secondaryColor);
  }}
  onMouseOut={() => {
    setIcon(true);
    setColor(props.mainColor);
  }}
>
  <Typography className={classes.buttonClass}>Get Started</Typography>
</Button>;
