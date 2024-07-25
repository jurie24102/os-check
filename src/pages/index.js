import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Button, Container } from "@mui/material";
import { useRouter } from "next/router";
import useOperatingSystem from './components/ForClintside';

export const getServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'];

  let os = 'unknown';

  if (/android/i.test(userAgent)) {
    os = 'Android';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    os = 'iOS';
  } else if (/Mac/i.test(userAgent)) {
    os = 'Mac';
  } else if (/Windows/i.test(userAgent)) {
    os = 'Windows';
  }

  return {
    props: {
      os,
    },
  };
};

export default function Home({ os: serverSideOS }) {
  const router = useRouter();
  const clientSideOS = useOperatingSystem();

  return (
    <>
      <Container sx={{ textAlign: "center", mt: 10 }}>
        <p>Server-side detected OS: {serverSideOS}</p>
        <p>Client-side detected OS: {clientSideOS}</p>
      </Container>
    </>
  );
}