import { surveyCss } from "./cssstandard";

export var defaultBootstrapCss = {
  root: "",
  header: "panel-heading card-header",
  body: "panel-body card-block",
  footer: "panel-footer card-footer",
  navigationButton: "",
  navigation: {
    complete: "sv_complete_btn",
    prev: "sv_prev_btn",
    next: "sv_next_btn",
    start: "sv_start_btn"
  },
  progress: "progress center-block mx-auto mb-4",
  progressBar: "progress-bar",
  pageTitle: "",
  pageDescription: "small",
  row: "",
  question: {
    mainRoot: "sv_qstn",
    title: "",
    description: "small",
    comment: "form-control",
    required: "",
    titleRequired: "",
    indent: 20
  },
  panel: { title: "", description: "small", container: "sv_p_container" },
  error: {
    root: "alert alert-danger",
    icon: "glyphicon glyphicon-exclamation-sign",
    item: ""
  },

  boolean: { root: "sv_qbln form-inline", item: "checkbox" },
  checkbox: {
    root: "sv_qcbx form-inline",
    item: "checkbox",
    other: "sv_q_checkbox_other"
  },
  comment: "form-control",
  dropdown: { root: "", control: "form-control", other: "" },
  matrix: { root: "table", label: "sv_q_m_label" },
  matrixdropdown: { root: "table" },
  matrixdynamic: { root: "table", button: "button" },
  paneldynamic: { root: "", button: "button" },
  multipletext: {
    root: "table",
    itemTitle: "",
    itemValue: "sv_q_mt_item_value form-control"
  },
  radiogroup: {
    root: "form-inline",
    item: "radio",
    label: "",
    other: "sv_q_radiogroup_other"
  },
  rating: {
    root: "btn-group",
    item: "btn btn-default btn-secondary",
    selected: "active"
  },
  text: "form-control",
  expression: "form-control",
  saveData: {
    root: "",
    saving: "alert alert-info",
    error: "alert alert-danger",
    success: "alert alert-success",
    saveAgainButton: ""
  },
  window: {
    root: "modal-content",
    body: "modal-body",
    header: {
      root: "modal-header panel-title",
      title: "pull-left",
      button: "glyphicon pull-right",
      buttonExpanded: "glyphicon pull-right glyphicon-chevron-up",
      buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
    }
  }
};
surveyCss["bootstrap"] = defaultBootstrapCss;
