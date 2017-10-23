(progn
  (unless (fboundp 'helm-mode)
    (ido-mode t)
    (setq ido-enable-flex-matching t))

  ;; Turning off annoying GUI stuff
  (menu-bar-mode -1)
  (when (fboundp 'tool-bar-mode)
    (tool-bar-mode -1))
  (when (fboundp 'scroll-bar-mode)
    (scroll-bar-mode -1))
  (when (fboundp 'horizontal-scroll-bar-mode)
    (horizontal-scroll-bar-mode -1))

  (autoload 'zap-up-to-char "misc"
    "Kill up to, but not including ARGth occurrence of CHAR." t)

  ;; Uh. Not sure.
  (require 'uniquify)
  (setq uniquify-buffer-name-style 'forward)

  ;; Saves place in buffer
  (require 'saveplace)
  (setq-default save-place t)

  ;; Custom keys
  ;; Unset the "crash me" keys
  (global-unset-key (kbd "C-z"))
  (global-unset-key (kbd "C-x C-z"))

  ;; Set the save bind to mirror nano
  (global-set-key (kbd "C-x y") 'save-buffer)

  ;; Better expand. Not sure why.
  (global-set-key (kbd "M-/") 'hippie-expand)
  ;; Better buffer
  (global-set-key (kbd "C-x C-b") 'ibuffer)
  ;; Useful zapping
  (global-set-key (kbd "M-z") 'zap-up-to-char)

  ;; Better search
  (global-set-key (kbd "C-s") 'isearch-forward-regexp)
  (global-set-key (kbd "C-r") 'isearch-backward-regexp)
  (global-set-key (kbd "C-M-s") 'isearch-forward)
  (global-set-key (kbd "C-M-r") 'isearch-backward)

  ;; Relative line numbers
  (global-set-key (kbd "C-c t") 'linum-relative-toggle)

  ;; Make autofill default for visual mode
  (add-hook 'visual-line-mode-hook 'auto-fill-mode)
  ;; Switch back to default mode
  (global-set-key (kbd "C-c n") 'normal-mode)

  ;; Trim whitespace. So, so useful.
  (add-hook 'before-save-hook 'delete-trailing-whitespace)

  (setq save-interprogram-paste-before-kill t
        apropos-do-all t
        mouse-yank-at-point t
        require-final-newline t
        visible-bell t
        load-prefer-newer t
        electric-pair-mode t
        ediff-window-setup-function 'ediff-setup-windows-plain
        save-place-file (concat user-emacs-directory "places")))

(provide 'defaults)
