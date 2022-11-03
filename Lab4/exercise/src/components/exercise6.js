import 'typeface-roboto';

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const headerFooterSylte = {
  padding: 8,
  textAlign: 'center'
}

const mainStyle = {
  padding: 16,
  textAlign: "center"
}

const navStyle = { marginLeft: 5};

export default function Exercise6() {
  return (
    <div style={{ flexGrow: 1}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={headerFooterSylte}>
            <Typography>*****Header*****</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <Grid container spacing={2} direction="column">
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 01</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 02</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 03</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography style={navStyle}>Nav Item 04</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 1</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 2</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 3</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={mainStyle}>
              <Typography>Main content 4</Typography>
            </Paper>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper style={headerFooterSylte}>
            <Typography>------Footer-----</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
