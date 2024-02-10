import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Secure Authentication and Authorization",
    Svg: require("@site/static/img/undraw_secure_login_pdn4.svg").default,
    description: (
      <>
        Ninka provides robust support for OAuth 2.0 and OIDC, ensuring secure authentication and
        authorization in modern applications.
      </>
    ),
  },
  {
    title: "Multi-Tenancy Support",
    Svg: require("@site/static/img/undraw_experts_re_i40h.svg").default,
    description: (
      <>
        Ninka offers built-in support for multi-tenancy, allowing you to manage multiple tenants
        within a single authentication and authorization framework.
      </>
    ),
  },
  {
    title: "Advanced User Permission System",
    Svg: require("@site/static/img/undraw_security_on_re_e491.svg").default,
    description: (
      <>
        Ninka includes a powerful user permission system that enables you to define granular
        permissions and access controls for your application's resources. Whether you need
        role-based access control (RBAC) or attribute-based access control (ABAC)
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
