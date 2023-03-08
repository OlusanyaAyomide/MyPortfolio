export const sideAnimation = {
  initial: {
    opacity: 0,
    y: -400,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const sideAnimationChildren = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const HeroAnimation = (width) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: width < 752 ? 0.2 : 2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
};
export const HeroChildrenAnimation = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const HeroLineAnimation = (width) => {
  return {
    initial: {
      height: 0,
    },
    animate: {
      height: "100%",
      transition: {
        duration: 0.5,
        delay: width < 752 ? 2.5 : 4,
      },
    },
  };
};

export const toggleAnimation = (number) => {
  return {
    initial: {
      rotate: 0,
      height: "4px",
      y: 0,
    },
    animate: {
      rotate: number === 1 ? "45deg" : "-45deg",
      y: number === 1 ? 10 : -10,
      height: "3px",
      transition: {
        duration: 0.5,
        stiffness: 1,
      },
    },
    animateback: {
      rotate: 0,
      height: "4px",
      y: 0,
      transition: {
        duration: 0.5,
        stiffness: 1,
      },
    },
  };
};

export const toggleCenter = () => {
  return {
    initial: {
      height: "4px",
      x: 0,
      opacity: 1,
    },
    animate: {
      x: 50,
      opacity: 0,
      height: "0px",
      transition: {
        duration: 0.5,
        stiffness: 1,
      },
    },
    animateback: {
      x: 0,
      opacity: 1,
      height: "4px",
      transition: {
        duration: 0.5,
        stiffness: 1,
      },
    },
  };
};

export const NavBarMotion = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  animateback: {
    x: -500,
    transition: {
      duration: 0.5,
    },
  },
};

export const TopNavMotion = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 2.5,
      when:"beforeChildren"
    },
  },
};
