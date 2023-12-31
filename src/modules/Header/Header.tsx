import styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import CurrentDateTime from "modules/Header/components/CurrentDateTime"
import ViewControls from "modules/Header/components/ViewControls"
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import SettingsButton from "modules/Header/components/SettingsButton"
import React, { useCallback, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { Dashboard, Newspaper, Settings } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"
import classNames from "classnames"

const Header = () => {
  const navigate = useNavigate()
  const { animateHeader } = usePageTransitionContext()
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement>()
  const { t } = useTranslation('translation', { keyPrefix: 'header' })

  const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }, [])

  const handleCloseNavMenu = () => {
    setAnchorElNav(undefined)
  }

  return (
    <AppBar position='fixed' classes={{ root: classNames(styles.appBar, { [styles.transition]: animateHeader }) }}>
      <Container className={styles.header} maxWidth='lg'>
        <Toolbar disableGutters className={styles.toolbar}>
          <h2 className={styles.title} onClick={() => navigate('/')}>
            {t('title')}
          </h2>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              color="inherit"
              aria-haspopup="true"
              aria-label="menu-button"
              aria-controls="menu-appbar"
              onClick={handleOpenNavMenu}
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              keepMounted
              id="menu-appbar"
              anchorEl={anchorElNav}
              className={styles.navMenu}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              <MenuItem key='newspaper' onClick={handleCloseNavMenu}>
                <Newspaper />
                <Typography textAlign="center">{t('menu.newspaper')}</Typography>
              </MenuItem>

              <MenuItem key='articles' onClick={handleCloseNavMenu}>
                <Dashboard />
                <Typography textAlign="center">{t('menu.articles')}</Typography>
              </MenuItem>

              <MenuItem key='settings' onClick={handleCloseNavMenu}>
                <Settings />
                <Typography textAlign="center">{t('menu.settings')}</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles.right}>
            <ViewControls />
            <SettingsButton />
            <CurrentDateTime className={styles.clock} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header