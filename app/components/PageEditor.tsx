import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from "@mui/icons-material/Folder";

import styles from "./PageEditor.module.css";

const muiStyles = {
  headerBtn: {
    color: "rgb(var(--black-rgb))",
    "&:hover": {
      color: "rgba(var(--black-rgb), 0.75)",
    },
  },
  editBtn: {
    color: "rgb(var(--white-rgb))",
    bgcolor: "rgb(var(--light-blue-rgb))",
    "&:hover": {
      bgcolor: "rgb(var(--dark-blue-rgb))",
    },
  },
  footerBtn: {
    color: "rgb(var(--white-rgb))",
    bgcolor: "rgb(var(--dark-grey-rgb))",
    p: 2,
    "&:hover": {
      bgcolor: "rgb(var(--light-blue-rgb))",
    },
  },
};

export default function PageEditor() {
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.canvas}`}>
        <div className={`${styles.header} ${styles.editable}`}>
          <div className={`${styles.editable}`}>
            <Button variant="text" sx={muiStyles.headerBtn}>
              <h1>My Website</h1>
            </Button>
            <div className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </div>
          </div>
          <div className={`${styles.list} ${styles.editable}`}>
            <div className={`${styles.editable}`}>
              <Button
                variant="text"
                sx={{ ...muiStyles.headerBtn, textTransform: "capitalize" }}
              >
                Sample Page
              </Button>
              <div className={`${styles.editBtn}`}>
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="Edit"
                  edge="start"
                  sx={muiStyles.editBtn}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div className={`${styles.editable}`}>
              <Button
                variant="text"
                sx={{ ...muiStyles.headerBtn, textTransform: "capitalize" }}
              >
                Sample Page 2
              </Button>
              <div className={`${styles.editBtn}`}>
                <IconButton
                  size="small"
                  color="inherit"
                  aria-label="Edit"
                  edge="start"
                  sx={muiStyles.editBtn}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </div>
          </div>
          <div className={`${styles.editBtn}`}>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Edit"
              edge="start"
              sx={muiStyles.editBtn}
            >
              <EditIcon />
            </IconButton>
          </div>
        </div>
        <div className={`${styles.hero} ${styles.editable}`}>
          <div className={`${styles.editBtn}`}>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Edit"
              edge="start"
              sx={muiStyles.editBtn}
            >
              <EditIcon />
            </IconButton>
          </div>
        </div>
        <div className={`${styles.content} ${styles.editable}`}>
          <h2 className={`${styles.editable}`}>
            Sample Page
            <div className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </div>
          </h2>
          <p className={`${styles.editable}`}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Et nibh eu eu
            ultricies auctor ullamcorper vulputate platea. Sem rutrum penatibus
            consectetur ridiculus accumsan platea dolor placerat. Laoreet
            tristique metus montes sed vehicula nascetur ac. Euismod donec
            torquent quisque velit class vulputate habitant nullam hac. Porta
            vulputate facilisis tempus feugiat ultrices accumsan montes felis
            integer.
            <span className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </span>
          </p>
          <p className={`${styles.editable}`}>
            Finibus nibh sagittis malesuada molestie placerat posuere morbi
            penatibus. Facilisi viverra nascetur pharetra molestie mus. Dapibus
            duis efficitur phasellus per lobortis eu. Dictum aenean metus
            interdum mattis conubia neque; molestie platea dui. Sodales nibh
            dictum, cras donec eros quisque. Mus ligula nunc magna eleifend
            semper. Congue curae feugiat interdum molestie mauris faucibus
            conubia fusce. Iaculis penatibus diam tristique suspendisse nostra
            taciti placerat quis nostra. Ut varius pellentesque nulla porta dis
            varius.
            <span className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </span>
          </p>
          <p className={`${styles.editable}`}>
            Nibh aliquet ullamcorper parturient sit odio sit. Penatibus
            hendrerit tristique vehicula netus adipiscing amet tortor cubilia.
            Convallis finibus enim ipsum arcu sagittis netus elit neque aliquet.
            Euismod ex ultrices maecenas eros facilisis; feugiat non habitant
            fames. Sit justo posuere vestibulum porttitor aptent. Eleifend
            congue ante torquent litora euismod nam. Quis lacinia nulla
            parturient, ultricies primis integer. Magna conubia tempor potenti
            fames ullamcorper ridiculus. Ac erat massa senectus id cras.
            <span className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </span>
          </p>
          <p className={`${styles.editable}`}>
            Et hendrerit tristique sed; gravida lacinia adipiscing. Per urna
            integer eu netus massa tellus. Mollis varius ipsum mollis donec
            tristique, dolor congue. Ullamcorper donec vestibulum; dui diam
            curabitur etiam velit tortor. Donec dictumst a mus iaculis neque
            sapien habitant. Sem id sodales mauris aptent ullamcorper ornare
            suscipit conubia. Aenean senectus commodo mollis commodo sagittis
            fringilla? Habitasse diam iaculis mus fusce platea porta integer ad.
            Felis urna rutrum habitant commodo nascetur leo elementum.
            Atristique integer platea volutpat ante aliquam venenatis euismod
            class?
            <span className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </span>
          </p>
          <p className={`${styles.editable}`}>
            Vel varius lectus at orci proin ullamcorper quisque. Commodo magnis
            nec sapien mattis turpis. Rutrum ad vulputate ullamcorper arcu donec
            lorem vestibulum senectus elit. Nascetur fusce ultricies aliquam
            viverra ornare ipsum velit. Lectus aliquam ut per nunc scelerisque
            purus. Primis vivamus cras venenatis neque per cubilia primis
            habitant. Class platea gravida fringilla finibus placerat integer
            dui etiam. Litora lacus tincidunt blandit lobortis ridiculus feugiat
            elementum purus libero.
            <span className={`${styles.editBtn}`}>
              <IconButton
                size="small"
                color="inherit"
                aria-label="Edit"
                edge="start"
                sx={muiStyles.editBtn}
              >
                <EditIcon />
              </IconButton>
            </span>
          </p>
          <div className={`${styles.editBtn}`}>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Edit"
              edge="start"
              sx={muiStyles.editBtn}
            >
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={`${styles.offCanvas}`}>
        <div className={`${styles.addNew}`}>
          <div className={`${styles.list}`}>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Add"
              edge="start"
              sx={{ ...muiStyles.footerBtn, bgcolor: "rgb(var(--red-rgb))" }}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              aria-label="Open"
              edge="end"
              sx={muiStyles.footerBtn}
            >
              <FolderIcon />
            </IconButton>
          </div>
          <p>Drag widget here</p>
        </div>
      </div>
    </div>
  );
}
