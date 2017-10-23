;; Auto-complete
(ac-config-default)

;; Show matching parenthesis
(show-paren-mode 1)

;; No tabs, only spaces here
(setq-default indent-tabs-mode nil)
;; Make brackets under statements
(c-set-offset 'substatement-open 0)
;; Only 2 spaces. 4 gets out of hand quickly
(setq c-basic-offset 2
      cperl-indent-level 2)

(provide 'code)
