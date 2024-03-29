import { useState } from 'react'
import { ethers } from 'ethers'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import { useConnectWallet, useSetChain } from '@web3-onboard/react'
import { Features, Footer, LoginButton, Pethreon, Typewriter, Video } from './components'
import { MetamaskSVG } from '../../svgs'
import { GREETINGS, LOGGING_IN } from '../../messages'
import { useWeb3Dispatch } from '../../hooks/useWeb3Dispatch'

import {
  CIRCLE_ANIMATION_DURATION as PAGE_FADE_IN_DELAY,
  PAGE_FADE_IN_DURATION,
  PAGE_FADE_OUT_DURATION
} from '../../constants'

import styles from "./Login.module.scss"

export const Login = () => {
  const [message, setMessage] = useState(GREETINGS)
  const [talking, setTalking] = useState(false)
  const [{ connecting }, connect] = useConnectWallet()
  const [, setChain] = useSetChain()
  const dispatch = useWeb3Dispatch()
  const navigate = useNavigate()

  async function signIn() {
    setMessage(LOGGING_IN)

    try {
      const wallets = await connect()
      const wallet = wallets[0]

      // check if the user is connected properly
      if (!wallet) throw new Error("Wallet provider not found")

      // switch to georli
      await setChain({ chainId: '0x5' })

      // create an ethers provider
      const provider = new ethers.providers.Web3Provider(wallet.provider, 'goerli')

      // save the "authenticated user"
      dispatch({ type: "setWeb3", payload: provider })

      localStorage.setItem("wallet", JSON.stringify(wallet.label))

      localStorage.getItem('last_page_visited') === "create" ?
        navigate("/create") :
        navigate("/contribute");
    } catch (error) {
      throw new Error("error")
    }
  }

  return (
    <motion.main
      className={styles.loginLayout}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: PAGE_FADE_IN_DELAY, duration: PAGE_FADE_IN_DURATION } }}
      exit={{ opacity: 0, transition: { duration: PAGE_FADE_OUT_DURATION } }}

      // everything must go above the backdrop (2) and the circles (3)
      style={{ zIndex: 4, position: 'relative' }}
    >
      <div className={styles.loginContent}>
        <Pethreon className={styles.pethreon} />
        <Features className={styles.features} />
        <Typewriter
          className={styles.typewriter}
          message={message}
          setTalking={setTalking}
        />
        <div className={styles.loginContainer}>
          <MetamaskSVG talking={talking} />
          <LoginButton className={styles.loginButton} onClick={signIn} disabled={connecting} />
        </div>
      </div>
      <Video />
      <Footer />
    </motion.main>
  )
}
