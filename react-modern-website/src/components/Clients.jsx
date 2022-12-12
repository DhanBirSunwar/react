import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} m-5 min-w-[120px] sm:min-w-[192px]`}>
          <img
            src={client.logo}
            alt="client_logo"
            className="w-[100px] object-contain sm:w-[192px]"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
