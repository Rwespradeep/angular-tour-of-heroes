import { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
            setHeaders: {
                'Authorization': 'Bearer 1234'
            }
        });
  return next(modifiedRequest);
};
