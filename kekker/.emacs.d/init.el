;;;;;;;;;;;
;; MELPA ;;
;;;;;;;;;;;
(require 'package)
(let* ((no-ssl (and (memq system-type '(windows-nt ms-dos))
                    (not (gnutls-available-p))))
       (url (concat (if no-ssl "http" "https") "://melpa.org/packages/")))
  (add-to-list 'package-archives (cons "melpa" url) t))
(when (< emacs-major-version 24)
  ;; For important compatibility libraries like cl-lib
  (add-to-list 'package-archives '("gnu" . "https://elpa.gnu.org/packages/")))
(package-initialize)

;;;;;;;;;;;;;;;
;; Load Path ;;
;;;;;;;;;;;;;;;
(add-to-list 'load-path "~/.emacs.d/lisp/")

;;;;;;;;;;;;;;
;; Packages ;;
;;;;;;;;;;;;;;
(require 'use-package)
(use-package defaults)
(use-package backup)
(use-package code)
(use-package dot-mode)
(use-package magit
  :bind ("C-x g" . magit-status))
 (use-package multiple-cursors
  :ensure t
  :bind ("C-c c" . mc/edit-lines)
        ("C->" . mc/mark-next-like-this)
        ("C-<" . mc/mark-previous-like-this)
        ("C-c C-<" . mc/mark-all-like-this))
(use-package org-mode
  :bind ("C-c o" . org-mode)
  :init
  (add-hook 'org-mode-hook 'visual-line-mode))

;;;;;;;;;;
;; Misc ;;
;;;;;;;;;;
(put 'downcase-region 'disabled nil)
(custom-set-variables
 '(custom-enabled-themes (quote (atom-dark)))
 '(custom-safe-themes
   (quote
    ("e9460a84d876da407d9e6accf9ceba453e2f86f8b86076f37c08ad155de8223c" default)))
 '(electric-pair-mode t)
 '(global-linum-mode t)
 '(package-selected-packages
   (quote
    (use-package magit auto-complete multiple-cursors linum-relative atom-dark-theme))))
(custom-set-faces
 '(bold ((t (:weight ultra-bold))))
 '(org-level-1 ((t (:inherit outline-1 :foreground "light sky blue"))))
 '(org-level-2 ((t (:inherit outline-2 :foreground "dark sea green"))))
 '(org-level-3 ((t (:inherit outline-3 :foreground "khaki3"))))
 '(org-level-4 ((t (:inherit outline-4 :foreground "light salmon")))))

(provide 'init)
