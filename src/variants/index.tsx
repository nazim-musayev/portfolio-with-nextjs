export const opacityVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  },
  out: {
    opacity: 0
  },
};

export const transitionProps = {
  variants: opacityVariants,
  initial: "hidden",
  animate: "visible",
  exit: "out",
};

export const drawerVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100vw",
  },
  out: {
    width: 0,
    transition: {
      delay: 0.5, 
      duration: 0.3,
    },
  },
};

export const drawerAnimationProps = {
  variants: drawerVariants,
  initial: "hidden",
  animate: "visible",
  exit: "out",
};

export const navItemVariants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: (idx: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delay: idx * 0.15
    },
  }),
  out: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.3,
    },
  },
};

export const navItemProps = {
  variants: navItemVariants,
  initial: "hidden",
  animate: "visible",
  exit: "out",
};
