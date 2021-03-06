(defvar --backup-directory (concat user-emacs-directory "_backups"))
(if (not (file-exists-p --backup-directory))
    (make-directory --backup-directory t))
(setq backup-directory-alist `(("." . ,--backup-directory)))
(setq make-backup-files t
      backup-by-copying t
      version-control t
      delete-old-versions t
      delete-by-moving-to-trash t
      kept-old-versions 4
      kept-new-versions 6
      auto-save-default t
      auto-save-timeout 20
      auto-save-interval 200))

(provide 'backup)
